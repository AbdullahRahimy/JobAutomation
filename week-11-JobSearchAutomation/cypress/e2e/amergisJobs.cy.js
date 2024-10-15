import { faker } from "@faker-js/faker";
import homePage from "../pageObjects/homePage/home.page";
import applyPage from "../pageObjects/applyPage/apply.page";

let name = faker.person.firstName().toString();
let lastName = faker.person.lastName().toString();
let email = faker.internet.email().toString();
let number = faker.phone.number();
let textData;

describe("Job serch QA Engineer", () => {
  before(()=>{
    cy.visit('/')
    cy.fixture('textData.json').then((data)=>{
      textData = data
    })
  })

  it("Search for QA Jobs", () => {
    homePage.searchFilled.type(textData.searchInput);
    cy.waitForElement(textData.applyElement, textData.applyText);
    cy.contains('Apply Now').click();
    cy.waitForElement(textData.nameElement);
    applyPage.nameFilled.type(name);
    applyPage.lastNameFilled.type(lastName);
    applyPage.emailFilled.type(email);
    applyPage.numberFilled.type(number);
    applyPage.raceinput.select(textData.raceInput);
    applyPage.sexFilled.select(textData.sexInput)
    applyPage.veteranFilled.select(textData.veteranStatus);
    applyPage.disabilityFilled.select(textData.disabilityStatus);
    applyPage.resumeFilled.select(textData.resumeStatus);
    applyPage.resumeUploadButton.selectFile(textData.resumePath, { action: 'drag-drop' });
  });
});
