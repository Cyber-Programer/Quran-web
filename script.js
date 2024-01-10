const surahs = [
    { "1": "Al-Fatiha" },
    { "2": "Al-Baqarah" },
    { "3": "Al-Imran" },
    { "4": "An-Nisa" },
    { "5": "Al-Maidah" },
    { "6": "Al-An'am" },
    { "7": "Al-A'raf" },
    { "8": "Al-Anfal" },
    { "9": "At-Tawbah" },
    { "10": "Yunus" },
    { "11": "Hud" },
    { "12": "Yusuf" },
    { "13": "Ar-Ra'd" },
    { "14": "Ibrahim" },
    { "15": "Al-Hijr" },
    { "16": "An-Nahl" },
    { "17": "Al-Isra" },
    { "18": "Al-Kahf" },
    { "19": "Maryam" },
    { "20": "Ta-Ha" },
    { "21": "Al-Anbiya" },
    { "22": "Al-Hajj" },
    { "23": "Al-Mu'minun" },
    { "24": "An-Nur" },
    { "25": "Al-Furqan" },
    { "26": "Ash-Shu'ara" },
    { "27": "An-Naml" },
    { "28": "Al-Qasas" },
    { "29": "Al-Ankabut" },
    { "30": "Ar-Rum" },
    { "31": "Luqman" },
    { "32": "As-Sajda" },
    { "33": "Al-Ahzab" },
    { "34": "Saba" },
    { "35": "Fatir" },
    { "36": "Ya-Sin" },
    { "37": "As-Saffat" },
    { "38": "Sad" },
    { "39": "Az-Zumar" },
    { "40": "Ghafir" },
    { "41": "Fussilat" },
    { "42": "Ash-Shura" },
    { "43": "Az-Zukhruf" },
    { "44": "Ad-Dukhan" },
    { "45": "Al-Jathiyah" },
    { "46": "Al-Ahqaf" },
    { "47": "Muhammad" },
    { "48": "Al-Fath" },
    { "49": "Al-Hujurat" },
    { "50": "Qaf" },
    { "51": "Adh-Dhariyat" },
    { "52": "At-Tur" },
    { "53": "An-Najm" },
    { "54": "Al-Qamar" },
    { "55": "Ar-Rahman" },
    { "56": "Al-Waqi'a" },
    { "57": "Al-Hadid" },
    { "58": "Al-Mujadila" },
    { "59": "Al-Hashr" },
    { "60": "Al-Mumtahina" },
    { "61": "As-Saff" },
    { "62": "Al-Jumu'ah" },
    { "63": "Al-Munafiqun" },
    { "64": "At-Taghabun" },
    { "65": "At-Talaq" },
    { "66": "At-Tahrim" },
    { "67": "Al-Mulk" },
    { "68": "Al-Qalam" },
    { "69": "Al-Haqqah" },
    { "70": "Al-Ma'arij" },
    { "71": "Nuh" },
    { "72": "Al-Jinn" },
    { "73": "Al-Muzzammil" },
    { "74": "Al-Muddathir" },
    { "75": "Al-Qiyamah" },
    { "76": "Al-Insan" },
    { "77": "Al-Mursalat" },
    { "78": "An-Naba" },
    { "79": "An-Nazi'at" },
    { "80": "Abasa" },
    { "81": "At-Takwir" },
    { "82": "Al-Infitar" },
    { "83": "Al-Mutaffifin" },
    { "84": "Al-Inshiqaq" },
    { "85": "Al-Buruj" },
    { "86": "At-Tariq" },
    { "87": "Al-A'la" },
    { "88": "Al-Ghashiyah" },
    { "89": "Al-Fajr" },
    { "90": "Al-Balad" },
    { "91": "Ash-Shams" },
    { "92": "Al-Layl" },
    { "93": "Ad-Duha" },
    { "94": "Ash-Sharh" },
    { "95": "At-Tin" },
    { "96": "Al-Alaq" },
    { "97": "Al-Qadr" },
    { "98": "Al-Bayyinah" },
    { "99": "Az-Zalzalah" },
    { "100": "Al-Adiyat" },
    { "101": "Al-Qari'ah" },
    { "102": "At-Takathur" },
    { "103": "Al-Asr" },
    { "104": "Al-Humazah" },
    { "105": "Al-Fil" },
    { "106": "Quraish" },
    { "107": "Al-Ma'un" },
    { "108": "Al-Kawthar" },
    { "109": "Al-Kafirun" },
    { "110": "An-Nasr" },
    { "111": "Al-Masad" },
    { "112": "Al-Ikhlas" },
    { "113": "Al-Falaq" },
    { "114": "An-Nas" }
];
async function callapi(suraNum,ayatNum) {
    try {
      const response = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_bn.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const quranData = await response.json();
      const fullSura = quranData[suraNum - 1];
      const suraName = fullSura.transliteration;
      const suraNameArbi = fullSura.name;
      const suraType = fullSura.type;
      const totalVerses = fullSura.total_verses;
      const verses = fullSura.verses;
  
      const data = {
        "name": suraName,
        "arbiName": suraNameArbi,
        "typee": suraType,
        "totalVerses": totalVerses,
      };
  
      if (ayatNum > 0) {
        const ayatData = verses[ayatNum - 1];
        const ayatArbi = ayatData.text;
        const ayatBng = ayatData.translation;
  
        data['Arbi'] = ayatArbi;
        data['Bangla'] = ayatBng;
      }
  
      return data;
    } catch (error) {
      console.error('Error fetching or processing data:', error);
      return null;
    }
  }


function findByName(name) {
    for (const surah of surahs){
        for (const [key, value] of Object.entries(surah)) {
            if (value.toLowerCase() === name.toLowerCase()) {
                return key;
            }
        }

    };
}


function checkSuggestionsBoxEmtyOrNot(){
    const suggestions = document.querySelector('#suggestions')
    const userInp = document.querySelector('#user-inp')
    // const hr = document.querySelector('hr')

    userInp.addEventListener('input', function(){
        if (userInp.value.trim() === '') {
            suggestions.innerHTML = '';
            suggestions.style.display = 'none';
            suggestions.style.opacity = 0
            userInp.style.borderBottomLeftRadius = '5px'
            userInp.style.borderBottomRightRadius = '5px'
            // hr.style.display = 'none'

        }else{
            suggestions.style.opacity = 1
            userInp.style.borderBottomLeftRadius = '0'
            userInp.style.borderBottomRightRadius = '0'
            // hr.style.display = 'block'
            suggestions.style.display = 'block';
        }
    })
}

function raper(){
    const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('click', function() {
        // Check if the clicked radio button is already checked
        if (this.checked) {
            // Deselect other radio buttons
            radioButtons.forEach(otherRadioButton => {
                if (otherRadioButton !== this) {
                    otherRadioButton.checked = false;
                }
            });
        }
    });
});

const userInput = document.getElementById('user-inp');
const suggestionsDiv = document.querySelector('.suggestions');


userInput.addEventListener('input', () => {
    const inputText = userInput.value.toLowerCase().trim();
    const filteredSurahs = surahs.filter((surah) => {
        const surahName = Object.values(surah)[0].toLowerCase();
        return surahName.includes(inputText);
    });

    // Display up to 3 matching surah names
    suggestionsDiv.innerHTML = '';
    for (let i = 0; i < Math.min(filteredSurahs.length, 3); i++) {
        const surahName = Object.values(filteredSurahs[i])[0];
        const surahNumber = Object.keys(filteredSurahs[i])[0];
        suggestionsDiv.innerHTML += `<p>${surahNumber}: ${surahName}</p>`;
    }

    suggestionsDiv.addEventListener('click', (event) => {
        if (event.target.tagName === 'P') {
          // Get the clicked suggestion text
        //   const hr = document.querySelector('hr')
          const clickedText = event.target.textContent.trim();
          // Set the input field value to the clicked suggestion text
          userInput.value = clickedText.replace(/^\d+:\s/, '');

          suggestionsDiv.innerHTML = '';
            suggestionsDiv.style.display = 'none';
            suggestionsDiv.style.opacity = 0
            userInput.style.borderBottomLeftRadius = '5px'
            userInput.style.borderBottomRightRadius = '5px'
            // hr.style.display = 'none'
          
        }
      });
    
});
}


    // const url = "https://quran-705q.onrender.com/surah/1";

function openspan() {
    const resultBox = document.querySelector('.result');
    const supportResult = document.querySelector('.supportResult')
    const box = supportResult.querySelector('p')
    const close = document.querySelector('#close')


    resultBox.addEventListener('click', function(event) {
        if (event.target.tagName === 'SPAN') {
            const span = event.target;
            const fullText = span.textContent; // Get the full text content of the span

            supportResult.style.display = 'block'
            box.innerHTML = fullText;
           
        }
    });

    close.addEventListener('click',function(){
        supportResult.style.display = 'none'
    })
}
    
    


function main() {
    const suraRadio = document.querySelector('input[value="sura"]');
    const numRadio = document.querySelector('input[value="num"]');
    const userInp = document.querySelector('#user-inp');

    suraRadio.addEventListener('click', function() {
        userInp.placeholder = 'Enter surah name...';
        userInp.type = 'text'
    });

    numRadio.addEventListener('click', function() {
        userInp.placeholder = 'Enter surah number...';
        userInp.type = 'number'
    });

    document.querySelector('form').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent form submission for demonstration purposes
        const selectedValue = document.querySelector('input[name="searchType"]:checked');
        const showName = document.querySelector('#namesp')
        const arbiName = document.querySelector('#arnamesp')
        const suraType = document.querySelector('#typesp')
        const total_ayat = document.querySelector('#taotalsp')
        const ayatshow = document.querySelector('#ayatspn')
        const ayatshow2 = document.querySelector('#ayatspn2')
        const resultBox = document.querySelector('.result')
        const backBtn = document.querySelector('#back')
        const raper = document.querySelector('.raper')
        // const span = document.querySelector('span')

        // function openspan() {
        //     const resultBox = document.querySelector('.result');
        
        //     resultBox.addEventListener('click', function(event) {
        //         if (event.target.tagName === 'SPAN') {
        //             event.target.style.whiteSpace = 'normal';
        //         }
        //     });
        // }
        

        backBtn.addEventListener('click',function(){
            resultBox.style.display = 'none';
            raper.style.filter = 'blur(0)';
        })


        if (!selectedValue) {
            alert('Select an option: Surah name or surah number');
        }else{
            if(selectedValue.value ==='num'){
                const suraNumber = userInp.value;
                if (suraNumber !== '') {
                    if (!isNaN(suraNumber)) {
                        // alert('Number') 
                        // const data = await callapi([suraNumber - 1]);
                        const verseNum = document.querySelector('#verseNum').value
                        if (!verseNum){
                            const data = await callapi(suraNumber);
                            // console.log(data);    
                            resultBox.style.display = 'block';
                            showName.innerHTML = data.name;
                            arbiName.innerHTML = data.arbiName;
                            suraType.innerHTML = data.typee;
                            total_ayat.innerHTML = data.totalVerses;
                            ayatshow.innerHTML = 'null';
                            ayatshow2.innerHTML = 'null';
                            openspan()
                            raper.style.filter = 'blur(5px)';

                        }else{
                            const data = await callapi(suraNumber,verseNum);
                            // console.log(data);
                            // console.log(verseNum);
                            // const Bangla = data.Bangla.split(' ')
                            // alert(Bangla.length)

                            resultBox.style.display = 'block';
                            showName.innerHTML = data.name;
                            arbiName.innerHTML = data.arbiName;
                            suraType.innerHTML = data.typee;
                            total_ayat.innerHTML = data.totalVerses;
                            ayatshow2.innerHTML = data.Arbi;
                            ayatshow.innerHTML = data.Bangla;
                            openspan()
                            raper.style.filter = 'blur(5px)';

                        }
                        //////////////////
                    }else{
                        alert(`Not number: ${suraNumber}`)
                    }
                }else{
                    alert('Emty')
                }
                
            }else if(selectedValue.value ==='sura'){
                const suraNamerp = userInp.value.replace(/^\d+:\s/, '')
                const suraName = suraNamerp.replace(/[0-9]/g, '')
                const verseNum = document.querySelector('#verseNum').value
                if (suraNamerp !== ''){
                    if (typeof suraName === 'string'){
                        // alert(`sura name validation pass: ${suraName}`)
                        const name = findByName(suraName)
                        // console.log(name);
                        if (!verseNum){
                            const data = await callapi(name);
                            // console.log(data);
                            resultBox.style.display = 'block';
                            showName.innerHTML = data.name;
                            arbiName.innerHTML = data.arbiName;
                            suraType.innerHTML = data.typee;
                            total_ayat.innerHTML = data.totalVerses;
                            ayatshow.innerHTML = 'null';
                            ayatshow2.innerHTML = 'null';
                            openspan()
                            raper.style.filter = 'blur(5px)';


                        }else{
                            const data = await callapi(name,verseNum);
                            // console.log(data);
                            // console.log(verseNum);

                            const Bangla = data.Bangla.split(' ')
                            const arbi = data.Arbi;
                            
                            if((Bangla.length + arbi.length) > 100){
                                // alert('not allow')
                            }

                            // alert(Bangla.length + arbi.length)

                            resultBox.style.display = 'block';
                            showName.innerHTML = data.name;
                            arbiName.innerHTML = data.arbiName;
                            suraType.innerHTML = data.typee;
                            total_ayat.innerHTML = data.totalVerses;
                            ayatshow2.innerHTML = data.Arbi;
                            ayatshow.innerHTML = data.Bangla;
                            openspan()
                            raper.style.filter = 'blur(5px)';

                        }
                        
                    }else{
                        alert('sura name validation fail')
                    }
                }else{
                    alert('Enter surah name.')
                }
            }
        }
    });
}



// Call all functions
checkSuggestionsBoxEmtyOrNot()
raper()
main()
// apiCall()