import axios from 'axios';
const Swal = require('sweetalert2')

class Verify {
  constructor(name, pic_id, button) {
    this.name = name;
    this.pic_id = pic_id;
    this.button = button;
  }
  validation(callback) {
    const picBox = document.getElementById('pic-box')
    const inputBox = document.getElementById('input-section')

    if (this.name === '' && this.pic_id !== '') {
      inputBox.placeholder = 'insert a name!';
    } else if (this.pic_id === '' && this.name !== '') {
      picBox.style.backgroundColor = '#f01e2c'
      picBox.style.transition = '0.2s'
    } else if (this.pic_id === '' && this.name === '') {
      picBox.style.backgroundColor = '#f01e2c'
      picBox.style.transition = '0.2s'
      inputBox.placeholder = 'insert a name!';
    } else {
      if (this.button === "start") {
        this.verifyIntoDatabase(this.name, this.pic_id, callback);
      } else if (this.button === "create") {
        this.pushIntoDatabase(this.name, this.pic_id, callback);
      } else {
        console.log("unexpected token");
      }
    }
  }
  verifyIntoDatabase(name, pic_id, callback) {
    const verify = async (n, p) => {
      try {
        const response = await axios.post('http://localhost:3001/verify', {name: n, pic_id: p});
        console.log('Dados enviados com sucesso:', response.data);
        if (response.data) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          }).then(() => {
            callback(true);
            // window.location.href = '/game'
          })
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "References not found!"
          }); 
          callback(false);
        }
      } catch (error) {
        console.error('Error on send data:', error);
      }
    };
    verify(name, pic_id);
  }
  pushIntoDatabase(name, pic_id, callback) {
    Swal.fire({
      title: name,
      imageUrl: pic_id,
      imageWidth: 350,
      imageHeight: 350,
      imageAlt: "pfp",
      confirmButtonText: 'Create',
      showCancelButton: true,
    }).then((result) => {
      if(result.value) {
        const verify = async (n, p) => {
          try {
            const response = await axios.post('http://localhost:3001/push', {name: n, pic_id: p});
            console.log('Successful sending data:', response.data);
            if (response.data) {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Signed in successfully"
              }).then(() => {
                callback(true);
                // window.location.href = '/game'
              })
            } else {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "Values already exists!"
              });
              callback(false);
            }
          } catch (error) {
            console.error('Error on send data:', error);
          }
        };
        verify(name, pic_id);
      } else {
        Swal.fire({
          title: "Cancelled!",
          icon: "error"
        });
        console.log('unsaved data')
      }
    });
  }
}

export default Verify;
