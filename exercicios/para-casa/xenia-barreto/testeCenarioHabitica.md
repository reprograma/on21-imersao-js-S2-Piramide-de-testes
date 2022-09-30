## Exercício 2 - Cenários e casos de teste:

<br>

Escreva os cenários de teste para o [habitica](https://habitica.com/static/home), considere pelo menos duas funcionalidades descritas no [Step 1 da Wiki do Habitica](https://habitica.fandom.com/wiki/Habitica_Wiki). 
Os cenários de teste não precisam ser completos, mas devem contemplar as principais fluxos da funcionalidade.

<br>

### Test Scenario 1 : Check the Set up To Do's
<strong>Pay Attention</strong>: the integration test in question is between pages with no login required
<br>


<strong>First Scenario</strong>

* Given the [Habitica Wiki](https://habitica.fandom.com/wiki/Habitica_Wiki) page 
* When clicking on "Set up To Do's"
* Redirect to the "To Do's" page

<strong>Second Scenario</strong>

* Given the [To Do's](https://habitica.fandom.com/wiki/To_Do%27s) page 
* Clicking on the icon [ ] "Collapse"
* Resize to larger page content

<strong>Third Scenario</strong>

* Given the [To Do's](https://habitica.fandom.com/wiki/To_Do%27s) page 
* Clicking on list icon named "Contents"
* Opening a modal with list of features
* Clicking on "x" icon
* Close the modal of functionalities list

<strong>Fourth Scenario</strong>

* Given the [To Do's](https://habitica.fandom.com/wiki/To_Do%27s) page 
* Clicking on pencil icon named "Edit"
* Redirecting to "Edit Page" page
* Clicking the "Save" button with no changes 
* Return to updated "To Do" page

### Test Scenario 2 : Check the Set up Dailies.
<strong>Pay Attention</strong>: the integration test in question is between pages with no login required
<br>

<strong>First Scenario</strong>

* Given the [Habitica Wiki](https://habitica.fandom.com/wiki/Habitica_Wiki) page 
* When clicking on "Set up Dailies"
* Redirect to the "Dailies" page

<strong>Second Scenario</strong>

* Given the [Dailies](https://habitica.fandom.com/wiki/Dailies) page 
* When clicking on the "English" dropdown button
* Opening the language list
* When clicking on the "Português do Brasil" language 
* Update the page  translated into Brazilian Portuguese

<strong>Third Scenario</strong>
* Given the [Dailies](https://habitica.fandom.com/pt-br/wiki/Di%C3%A1rias) page in Brazilian Portuguese
* When you click on the "View Source Code" button
* Redirect to the "View Source Code for Dailies" page
* When clicking the "Back to Page" button
* Redirect to the "Dailies" page in Brazilian Portuguese