const UDP = require('dgram')

const client = UDP.createSocket('udp4')

const port = 3000

const hostname = 'localhost'

client.on('message', (message, info) => {
  // get the information about server address, port, and size of packet received.

  console.log('Address: ', info.address, 'Port: ', info.port, 'Size: ', info.size)

  //read message from server

  console.log('Message from server', message.toString())
  client.close()
})

const packet = Buffer.from('This is a message from Client')

client.send(packet, port, hostname, (err) => {
  if (err) {
    console.error('Failed to send packet !!')
  } else {
    console.log('Packet send !!')
  }
})
