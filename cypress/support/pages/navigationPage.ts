
let searchInput = "#search_query_top"
let searchButton = "[name='submit_search']"
let womenCategoryButton = "[class*='menu-content'] [title='Women']"

export class NavigationPage {

  searchForProduct(phrase: string){
    cy.get(searchInput).clear().type(phrase)
    cy.get(searchButton).click()
  }

  chooseWomenCategoryFromNavi(){
    cy.get(womenCategoryButton).first().click()
  }

}

export const navigationPage = new NavigationPage()
