# Spectrum Code Challenge

## Charter/Spectrum Front-End Code Challenge
For this challenge we would like you to create a React application that pulls restaurant data from a simple API, displays that data in a table, and allows users to filter that data.

<b>API Endpoint:</b> https://code-challenge.spectrumtoolbox.com/api/restaurants </br>
<b>API Key Header:</b> Authorization | Api-Key q3MNxtfep8Gt</br>
<b>Example Fetch:</b></br>
<pre>fetch(“https://code-challenge.spectrumtoolbox.com/api/restaurants”, {
 headers: {
 Authorization: “Api-Key q3MNxtfep8Gt”,
 },
});</pre>

## User stories are as follows:
• A user should be able to see a table with the name, city, state, phone number, and genres for each
restaurant.</br>
• A user should see results sorted by name in alphabetical order starting with the beginning of the
alphabet</br>
• A user should be able to filter restaurants by state. If a state is selected that does not contain any
restaurants, there should be something that indicates no restaurants were found for that state.</br>
• A user should be able to filter by genre.</br>
• State and Genre filters should default to “All” and take effect instantaneously (no additional clicks).</br>
• A user should be able to enter text into a search field. When hitting the enter key or clicking on a
search button, the table should search results. Search results should match either the name, city, or
genre.</br>
• A user should be able to clear the search by clearing the text value in the search input.</br>
• A user should only see 10 results at a time and the table should be paginated.</br>
• A user should be able to combine filters and search. The user should be able to turn filters on and off
while a search value is present.</br>
</br>

## What we are looking for:
• No use of third-party libraries for the table/filter/search. Using Create-React-App or Next.js as a
starter kit is okay.</br>
• Well organized file structure</br>
• Descriptive naming conventions</br>
• DRY code that is readable and production ready</br>
• Reusable components</br>
• Sound logic for how the filters are architected</br>
• Styling follows a convention/pattern and is well organized</br>
• Full Git history with atomic commits</br>
</br>

## Stretch goals:
• Deployed application</br>
• CI / CD</br>
• Unit tests</br>
• TypeScript</br>
• Table row click shows additional information</br>
• Add filter for attire</br>
• Feel free to get creative!</br>