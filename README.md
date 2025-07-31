# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

You can run it with:

```bash
npm install
npm run dev
```

# Hierarchy table
This project loads hierarchical data from a JSON file and firstly tranforms it into a flat structure and add generated IDs to each item. So each item in the hierarchy can be uniquely identified and manipulated. 
Then it is displayed in a table format with expandable rows for child items. The table allows for deleting and expanding/collapsing rows, and it uses Material-UI for styling.

What could be improved:
- there is some time spent on flattening the hierarchy data for better work experience, but could it be avoided just simply working with the given structure, on the other side this code can manipulate with json that has not unified structure, because it is taking the data and children parts into account. It would be also much better preprocess the data on the server side, so the client would not have to do it and for example send also the ids that are not duplicated.
- the table is not paginated, so it could be a problem with large datasets