
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        scanResult(decodedText);
      };
      const html5QrCode = new Html5Qrcode("reader");
      const config = { fps: 10, qrbox: { width: "auto", height: "auto" } };
  
      html5QrCode.start({ facingMode: "environment" }, config,qrCodeSuccessCallback);
      function scanResult(result) {
        alert(result);
      }