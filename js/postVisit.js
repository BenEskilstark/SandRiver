
const URL = 'https://benhub.io/analytics/visit';

const postVisit = (path, map) => {
    map = map ?? "GET";
    const isUnique = !!!localStorage.getItem('isRevisit');
    localStorage.setItem('isRevisit', true);
    return fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hostname: window.location.hostname, path, isUnique, map, })
    });
}

window.postVisit = postVisit;
export { postVisit }