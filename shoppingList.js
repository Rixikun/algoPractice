/*
Problem Statement
You need to pick up some food for a camping trip. To save time in the store, you decide to optimize your shopping by only visiting each department once instead of simply following your list. You’d like to know how much time this will save you.

You will be given a list of pairs of products and what departments they are in. You will also be given a shopping list. Given these, return the difference in the number of department visits needed if you optimize your shopping. For example, if it would take 5 department visits by following your shopping list in order, and 2 if you optimize your shopping by only visiting each department once, return 3.

Any product in your shopping list will be in the product/department pairs. Items will only appear on the shopping list once. Products will only appear in one department.

Examples
For example, if the store has the following four products:

# Product      Department
  Cheese       Dairy
  Yogurt       Dairy
  Coffee       Pantry
  Pasta        Pantry
If your shopping list is Cheese, Coffee, Yogurt, Pasta, if you follow that list in order, you would make 4 department visits (Dairy, Pantry, Dairy, Pantry). However, with optimal ordering you could get these items with 2 department visits. You would return 2 (4 - 2 = 2)

However, if your shopping list was Cheese, Coffee, Pasta, Yogurt, following that list in order would result in 3 department visits. Optimally, you would get the items in two department visits, so you would return 1 (3 - 2 = 1)


# str arr
  Args:
    products: an array of arrays, each array representing a single item and
              what department it is in (ex: [["Cheese", "Dairy"], ...])
    shopping_list: an array representing the unsorted shopping list 
  Returns:
    A Number, how many department visits are saved by optimal shopping.
*/
function ordered_shopping(products, shopping_list) {
    let byList = 0;
    let byDept = 0;
    let dict = {}
    let neededDept = {}
  
    //create dict
    for (let i = 0; i < products.length; i++) {
      let prod = products[i][0]
      let dept = products[i][1]
      // item : dept
      dict[prod] = dept
    } 
  
    //count byList, add keys to neededDept
    for(let i = 0; i < shopping_list.length; i++) {
      let item = shopping_list[i]
      if(i === 0) {
        byList++
        neededDept[dict[item]] = true
      } else {
        let prevItem = shopping_list[i - 1]
        //if prev item's dept differs, add count & add key
        if(dict[item] !== dict[prevItem]){
          byList++
          neededDept[dict[item]] = true
        }
      }
    }
    //count all dept in neededDept
    byDept = Object.keys(neededDept).length
    
    return byList - byDept;
  }
  
  
  
  let input = [['cake', 'pastry'], ['hotdog', 'meat'], ['tart', 'pastry']]
  let list = ['cake', 'hotdog']
  
  console.log(ordered_shopping(input, list))