
let cartDescription = ".cart_item .cart_description"

export class OrderPage {

verifySearchPageUrl(){
  cy.url().should('include', 'controller=order')
}

verifyCartItem(productName: string){
  cy.get(cartDescription).should("contain", productName)
}

}

export const orderPage = new OrderPage()
