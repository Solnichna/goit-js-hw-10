import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.getElementById('notification-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stateRadio = document.querySelector('input[name="state"]:checked');

  const delay = parseInt(delayInput.value);

  const notificationPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      if (stateRadio.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  notificationPromise.then((result) => {
    iziToast.success({
      title: 'Fulfilled promise',
      message: `✅ Fulfilled promise in ${result}ms`,
    });
  }).catch((result) => {
    iziToast.error({
      title: 'Rejected promise',
      message: `❌ Rejected promise in ${result}ms`,
    });
  });
});
