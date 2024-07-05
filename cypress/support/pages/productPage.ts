
let addToCartBtn = "#add_to_cart"
let attributesId = "#attributes"
let itemName = "[itemprop='name']"
let cartLayer = "#layer_cart"
let greenTick = ".icon-check"
let proceedToCheckoutBtn = "[title='Proceed to checkout']"

function verifyProductPage(){
  cy.url().should('include', 'controller=product')
}

export class ProductPage {

  verifyProductTitle(phrase: string){
      verifyProductPage()
      cy.get(itemName).should("contain", phrase)
  }

  changeProductColor(colorVariant: string, colorVariantRgb: string){
      cy.get(attributesId).then(attributes => {
          let colorButton = attributes.find("[title='" + colorVariant + "']")
          cy.wrap(colorButton).click({force: true})
          cy.wrap(colorButton).should('have.css', 'background-color', colorVariantRgb)
          cy.wrap(colorButton).should('have.class', 'color_pick selected')
      })
  }

  clickSubmitButton(){
      cy.get(addToCartBtn).click()
  }

  checkCartLayer(){
      cy.get(cartLayer).should('be.visible')
      cy.get(greenTick).should('exist')
  }

  clickCheckoutButton(){
    cy.get(proceedToCheckoutBtn).click()
}

}

export const productPage = new ProductPage()
