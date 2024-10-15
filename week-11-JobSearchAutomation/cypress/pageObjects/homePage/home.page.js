class HomePage{
    get searchFilled(){
       return cy.get('[class="facetwp-search"]')
    }
}
export default new HomePage();