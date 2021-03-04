function klik(){
           
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    document.write("Hallo "+nama+" Click Select 'Send Message' to continue Open Application Your Email Send Message<a href='mailto:wijayaanton50@gmail.com?subject=hire%20me&body="+pesan+"'>Sent Message</a><br>back to <a href='https://antonwiji.github.io/'>Home Page</a>");
}