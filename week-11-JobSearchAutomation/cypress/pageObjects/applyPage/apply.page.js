class ApplyPage{
    get nameFilled(){
        return cy.get('[placeholder="First Name *"]')
    }
    get lastNameFilled(){
        return cy.get('[placeholder="Last Name *"]')
    }
    get emailFilled(){
        return cy.get('[placeholder="Email*"]')
    }
    get numberFilled(){
        return cy.get('[placeholder="Phone*"]')
    }
    get raceinput(){
        return cy.get('[id="input_2_23"]')
    }
    get sexFilled(){
        return cy.get('[id="input_2_24"]')
    }
    get veteranFilled(){
        return cy.get('[id="input_2_25"]')
    }
    get disabilityFilled(){
        return cy.get('[id="input_2_27"]')
    }
    get resumeFilled(){
        return cy.get('[id="input_2_4"]')
    }

    get resumeUploadButton(){
        return cy.get('[id="input_2_5"]')
    }
}
export default new ApplyPage();