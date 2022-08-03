// Read a file async'ly -- filename: sample.txt 
// once the file is read -- emit custom event 'FILE_READING_SUCCESS' with the content of sample.txt 

// upon FILE_READ_SUCCESS emitted, Write a file async'ly - filename: sample1.txt with the content of sample.txt 
// emit custom event 'FILE_WRITING_SUCCESS' 

// upon FILE_WRITING_SUCCESS emitted, read a file 'sample1.txt' 
// and display the content of the sample1.txt in console.log



