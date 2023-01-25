const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const obj = JSON.parse(jsonString);

const queries = ['name', 'age', 'city'];

queries.forEach(query => {
    document.write(obj[query]);
});