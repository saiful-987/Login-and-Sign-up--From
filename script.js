document.addEventListener('DOMContentLoaded', function() {
  // পেজ সম্পূর্ণ লোড হলে এই কোডটি কাজ করবে।
  const optionA = document.querySelector('a[href="#option1"]'); // "option1" আইডি সহ অ্যাঙ্কর ট্যাগটি নির্বাচন করা হচ্ছে।
  const optionB = document.querySelector('a[href="#option2"]'); // "option2" আইডি সহ অ্যাঙ্কর ট্যাগটি নির্বাচন করা হচ্ছে।
  const backgroundDiv = document.getElementById('backgroundDiv'); // "backgroundDiv" আইডি সহ ডিভটি নির্বাচন করা হচ্ছে।

  const option1Content = document.getElementById('login');
  const option2Content = document.getElementById('register');
  
  optionB.textContent = ''; // প্রাথমিকভাবে, অপশন B-এর লেখা খালি করা হচ্ছে।

  // অপশন A-তে ক্লিক করলে (সাইন আপ)
  optionA.addEventListener('click', function() {
    
    // লগইন ফর্মকে বাম দিকে সরিয়ে নেওয়া
    option1Content.classList.add('slide-out-1');
    
    // রেজিস্ট্রেশন ফর্মকে সঙ্গে সঙ্গে দেখানো এবং অ্যানিমেশন শুরু করা
    option2Content.style.display = 'block';
    option2Content.classList.add('slide-in-2');

    // অ্যানিমেশন শেষ হলে লগইন ফর্মকে লুকিয়ে ফেলা
    option1Content.addEventListener('animationend', function handler() {
      option1Content.style.display = 'none';
      option1Content.classList.remove('slide-out-1');
      option1Content.removeEventListener('animationend', handler);
    }, { once: true });

    // ৫০০ মিলিসেকেন্ড পর ব্যাকগ্রাউন্ড অ্যানিমেশন শুরু করা
    setTimeout(function() {
      backgroundDiv.style.transform = 'translateY(-25%) translateX(-07%) rotate(-50deg)';
      backgroundDiv.style.left = '-10cm';
      backgroundDiv.style.bottom = '-2.4cm';
    }, 50);

    // অপশন A এবং B এর লেখা পরিবর্তন করা
    optionA.textContent = '';
    optionB.textContent = 'Login';
  });

  // অপশন B-তে ক্লিক করলে (লগইন)
  optionB.addEventListener('click', function() {
    
    // রেজিস্ট্রেশন ফর্মকে visible করা (অ্যানিমেশন ট্রিগারের জন্য দরকার)
    option2Content.style.display = 'block';

    // রেজিস্ট্রেশন ফর্মকে ডান দিকে সরিয়ে নেওয়া
    option2Content.classList.add('slide-out-2');

    // লগইন ফর্মকে সঙ্গে সঙ্গে দেখানো এবং অ্যানিমেশন শুরু করা
    option1Content.style.display = 'block';
    option1Content.classList.add('slide-in-1');
    
    // অ্যানিমেশন শেষ হলে রেজিস্ট্রেশন ফর্মকে লুকিয়ে ফেলা
    option2Content.addEventListener('animationend', function handler() {
      option2Content.style.display = 'none';
      option2Content.classList.remove('slide-out-2'); // remove করতে হবে
      option2Content.removeEventListener('animationend', handler);
    }, { once: true });

    // ৫০০ মিলিসেকেন্ড পর ব্যাকগ্রাউন্ড অ্যানিমেশন শুরু করা
    setTimeout(function() {
      backgroundDiv.style.transform = 'translateY(-25%) translateX(07%) rotate(50deg)';
      backgroundDiv.style.left = '0';
      backgroundDiv.style.bottom = '-2.4cm';
    }, 50);

    // অপশন A এবং B এর লেখা পরিবর্তন করা
    optionB.textContent = '';
    optionA.textContent = 'Sign up';
  });
});