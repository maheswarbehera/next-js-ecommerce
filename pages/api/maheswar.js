export default function handler(req, res) {
    //res.status(200).json({ name: 'Maheswar Behera', message: 'Welcome to next js' })

    if(req?.method === 'POST') {
        res.status(200).json({ message: "Post method can't acceptable" })
    }
    if(req?.method === 'GET'){
        res.status(200).json({message: "GET method acceptable"})
    }
  }