const routes = (req, res) => {
    const data = []

    if (req.url === '/') {
        res.write('<h1>Hello, welcome, always believe yourself!</h1>')
        res.write('<form method="POST" action="/create_user">')
        res.write('<input type="text" name="username" placeholder="username" />')
        res.write('<button type="submit">Save!</button>')
        res.write('</form>')
        res.end()
    } else if (req.url === '/users') {
        res.write('<h1>List of users</h1>')
        res.write('<ul>')
        res.write('<li>Liam Gallagher</li>')
        res.write('<li>Ian Brown</li>')
        res.write('</ul>')
        res.end()
    } else if (req.url === '/create_user') {
        req.on('data', (chunck) => {
            data.push(chunck)
            const decodedData = Buffer.concat(data).toString()
            const username = decodedData.split('=')[1]
            console.log(username)
            res.end()
        })  
    }
}

module.exports = routes