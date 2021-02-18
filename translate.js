
const str1 = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str2 = str1.trim().toUpperCase().split(' ')

for (let elem of str2)
  console.log(`mot: ${elem}`)
