# DOMAIN SEARCH APP

The Domain Search App is a convenient tool that allows you to search for information about domains.<br>
It utilizes a [Domain Checker API](https://rapidapi.com/MASNathan/api/domain-checker7/) from RapidAPI to retrieve comprehensive domain-related data.<br>
This app provides insights into domain availability, ownership, and other pertinent details.<br>
The user interface of this Email Validator App has been designed to resemble the UI of a similar project showcased in one of RapidAPI's blogs. 
I was inspired by their design and wanted to replicate a visually appealing and user-friendly interface for this app.

## Getting Started
1. Create a RAPID API Account
2. Subscribe to Test:
> ![screen-domain](https://github.com/AnouarElKihal/domain-search/assets/68613907/312960c1-77d4-4f8c-8cb9-e224556f7a8f)
3. Replace YOUR_DOMAIN_CHECKER_API_KEY in the JavaScript file:
```javascript
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_DOMAIN_CHECKER_API_KEY',
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
}
```

## Features
- Search for information about any domain.
- Obtain details about domain availability and ownership.
- Retrieve domain-related data such as registration information, creation date, expiration date, and WHOIS records.

## Live Application
You can find it online at this url: [domain-search.eabug.repl.co](https://domain-search.eabug.repl.co/)
> ![domain-search-screen](https://github.com/AnouarElKihal/domain-search/assets/68613907/634ce7fc-5316-4afe-99bf-5174716e8a3c)


