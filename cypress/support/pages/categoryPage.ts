
export class CategoryPage {

verifyCategoryPageUrl(){
  cy.url().should('include', 'controller=category')
}

chooseFilterColor(color: string){
  cy.get('[class*=color-option][style*="'+ color +'"]').click()
  cy.wait(500)
}

checkTilesContainFilteredColor(colorHex: string, colorRgb: string){
  cy.get('[class=color-list-container] [style*="'+ colorHex +'"]').each(($lis => {
    expect($lis).to.have.css('background-color', colorRgb)
  }))
}
}

export const categoryPage = new CategoryPage()
