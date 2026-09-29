function fetchWithTimeout(url, ms) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timed Out"));
        }, ms);
    });

    return Promise.race([
        fetch(url),
        timeoutPromise
    ]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 2000)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
