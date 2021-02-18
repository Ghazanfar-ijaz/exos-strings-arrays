const str1 = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '



let str2 = str1.trim()
let str3 = str2.toLowerCase()

console.log(str3)


if (str3.includes(`bob`)) {
  console.log(`L'occurence 'Bob' est présente dans cet string.`)
}

else {
  console.log(`L'occurence 'Bob' n'est pas présente dans cet string.`)
}