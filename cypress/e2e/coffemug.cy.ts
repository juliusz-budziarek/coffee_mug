import {authenticationPage} from "../support/pages/authenticationPage";
import {navigationPage} from "../support/pages/navigationPage";
import {searchPage} from "../support/pages/searchPage";
import {categoryPage} from "../support/pages/categoryPage";
import {productPage} from "../support/pages/productPage";
import { orderPage } from "../support/pages/orderPage";




describe('template spec', () => {

  beforeEach(function (){
   
    cy.fixture('products').then((products) => {
      this.products = products
    })
   
    cy.visit('')
  })

  it('1.User Registration and Login', function() {
    authenticationPage.openAuthenticationPage()
    authenticationPage.verifyAuthenticationUrl()
    authenticationPage.registerAccountNewEmail()
    authenticationPage.typeAccountPersonalData()
    authenticationPage.clickRegisterButton()
    authenticationPage.verifySuccessfulLoginUrl()
    authenticationPage.checkAlertSuccessBar()
  })
  it('2.Product Search', function() {
    navigationPage.searchForProduct(this.products.productName1)
    searchPage.verifySearchPageUrl()
    searchPage.verifyPhraseInProductList(this.products.productName1)
  })

  it('3.Product Filter', function() {
    navigationPage.chooseWomenCategoryFromNavi()
    categoryPage.verifyCategoryPageUrl()
    categoryPage.chooseFilterColor(this.products.productColorBlue.hex)
    categoryPage.checkTilesContainFilteredColor(this.products.productColorBlue.hex, this.products.productColorBlue.rgb)
  })
 
  it('4.Add product to the basket', function() {
    navigationPage.searchForProduct(this.products.productName2)
    searchPage.verifyPhraseInProductList(this.products.productName2)
    searchPage.chooseProduct()
    productPage.verifyProductTitle(this.products.productName2)
    productPage.changeProductColor(this.products.productColorWhite.name, this.products.productColorWhite.rgb)
    productPage.clickSubmitButton()
    productPage.checkCartLayer()
    productPage.clickCheckoutButton()
    orderPage.verifySearchPageUrl()
    orderPage.verifyCartItem(this.products.productName2)
  })

})