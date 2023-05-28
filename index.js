const sendMessage = async (message) => {
    const url = 'http://direccion_ip_esp32:puerto/ruta_del_backend'; // Reemplaza con la dirección IP y el puerto del ESP32
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      if (response.ok) {
        console.log('Mensaje enviado correctamente');
      } else {
        console.error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };
  
  // Uso de la función para enviar un mensaje
  sendMessage('Hola desde el frontend');