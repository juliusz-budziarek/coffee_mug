
let searchTiles = "[class='product_list grid row'] [class='product-name']"
let moreButton = "[title='View']"

export class SearchPage {

verifySearchPageUrl(){
  cy.url().should('include', 'controller=search')
}
verifyPhraseInProductList(phrase: string){
  cy.get(searchTiles).each(($lis) => {
    expect($lis).to.contain.text(phrase)
  })
}
chooseProduct(){
  cy.get(moreButton).click({force:true})
}

}

export const searchPage = new SearchPage()
