#notes from project

Brief:
Create a website that gets news from the GNews api:

Your website must:

1. Include a search area
2. Include a results area
3. Include tests
4. Be hosted on a publicly accessible URL, so we can see it working

I have successfully created an MVP of the required brief which includes:

- a search bar that takes a search term and returns the top 10 results from the GNews API
- a results area that displays the results from the search
- a test suite that tests the search bar and results area
- a hosted version of the website on Netlify

Approach:

Though Typescript is a language I am familiar with, I have chosen to use Javascript for this project as I am more familiar with it and it is the language I am most comfortable with. I am currently learning Typescript and I would like to use it in future projects and my learning plan should enable me to be compitent with it by the end of february. I have used CSS to style the website and the Jest testing library to test the website.

I started by creating a new React app using the create-react-app boilerplate. I then created a news headline section with the top stories followed by a search bar complete with results. I then created a sard component that was passed mapped props and displayed data depending on the content to ensure reusability.

I wanted to keep the design simple to focus on the functionality of the website to enable me to complete the MVP in the time given and enable me to use the Agile methodology to bring this MVP to the product owner for feedback to ensure any desired design choices could be made by the customer, therefore reducing any tech debt and allowing a more efficient workflow.

issues:

-limited api calls made it difficult to test the website, therefore i created a dummy json file to test the website before using my api key
-During my deployment i changed access of the account from Percayso to my personal account to enable me to deploy to netlify. This was due to lack of knowlege when deploying on netlify and in hindsight i should have asked for clairification on how to deploy from the Percayso account.
-due to personal circumstances i was unable to spend as much time on this project as i would have liked to, therefore i was unable to complete the extra credit section of the brief yet I am confident that given more time, i would be able to complete this section and add further functionality to the website.

future improvements:

- complete typescript training
- add more tests to the test suite
- add more functionality to the website
- add a loading screen to the website
