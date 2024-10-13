class homePage{
    get searchFilled(){
       return cy.get('[class="facetwp-search"]')
    }
    get applyButton(){
        return cy.contains('Apply Now')
    }
}
export default new homePage();