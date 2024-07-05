
let alert = ".alert-success"
let submitAccountButton = "#submitAccount"
let createAccountForm = "#create-account_form"
let createEmailInput = "#email_create"
let createUserSubmitButton = "#SubmitCreate"
let firstNameInput = "#customer_firstname"
let lastNameInput = "#customer_lastname"
let passwordInput = "input[name='passwd']"


function mailGenerator(){
    const count = Math.floor(Math.random() * 50000000)
    const number = count.toString()
    const mail = String("user" + number + "@coffemug.com")
    return mail
}


export class AuthenticationPage {


    openAuthenticationPage(){
        cy.visit('?controller=authentication&back=my-account')
    }

    verifyAuthenticationUrl(){
        cy.url().should('include', 'authentication')
    }
  
    verifySuccessfulLoginUrl(){
        cy.url().should('include', 'my-account')
    }

    registerAccountNewEmail(){
        cy.get(createAccountForm).then(createAccountForm => {
            cy.wrap(createAccountForm).find(createEmailInput).type(mailGenerator())
            cy.wrap(createAccountForm).find(createUserSubmitButton).click()
        })
    }

    typeAccountPersonalData(){
        const d = String("coffeemug")
        cy.get(firstNameInput).type(d)
        cy.get(lastNameInput).type(d)
        // cy.get("#phone_mobile").type("000000000")
        // cy.get("#address1").type(d)
        // cy.get("#city").type(d)
        // cy.get("#id_state").select("Alaska")
        cy.get(passwordInput).type(d + d, { force: true })
        // cy.get("#postcode").type("11111")
    }

    clickRegisterButton(){
        cy.get(submitAccountButton).click()
    }

    checkAlertSuccessBar(){
        cy.get(alert).should('be.visible')
    }



}

export const authenticationPage = new AuthenticationPage()
