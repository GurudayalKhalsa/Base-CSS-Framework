#CSS Minifyer - JS is harder

import sys, os, ntpath, math

print "\n"

if not sys.argv[1]:
    print "Terminal Usage - python minify.py file.css"

elif not os.path.exists(sys.argv[1]):
    print "That is not a valid file. Check path name again.\n Terminal Usage - python minify.py /path/to/file.css"


elif sys.argv[1] and os.path.exists(sys.argv[1]):

    def isCSS():
        return ntpath.basename(sys.argv[1])[-4:] == ".css"

    if not isCSS():
        print "ERROR: The file must be css and have the .css extension"

    else:

        def isJS():
            return ntpath.basename(sys.argv[1])[-3:] == ".js"

        def replaceText(text):
            #actual replacing
            text = text.replace('\n','')
            text = text.replace('\t','')
            text = text.replace('\r','')
            text = text.replace('  ','')
            text = text.replace(', ',',')
            text = text.replace(': ',':')
            text = text.replace('; ',';')
            text = text.replace(' {','{')
            text = text.replace('{ ','{')
            text = text.replace('} ','}')
            text = text.replace(' }','}')
            if isCSS():
                text = text.replace('}','}\n')
            text = text.replace('= ','=')
            text = text.replace(' =','=')
            text = text.replace(' +','+')
            text = text.replace(' -','-')
            text = text.replace(' >','>')
            text = text.replace('> ','>')
            text = text.replace(' <','<')
            text = text.replace('< ','<')
            text = text.replace(' |','|')
            text = text.replace('| ','|')
            text = text.replace(' &','&')
            text = text.replace('& ','&')

            #replace /* */ comments
            if '*/' in text:
                c = 0
                for i in range(len(text)-1):
                    if text[i]+text[i+1]=="*/":
                        c += 1
                for j in range(c):
                    if '/*' in text and '*/' in text:
                        cb = text.index('/*')
                        ce = text.index('*/')+2
                    else:
                        break
                    comment = ""
                    for i in range(cb,ce):
                        comment += text[i]
                    text = text.replace(comment,'')

            #replace // comments
            if isJS() and '//' in text:
                c = 0
                for i in range(len(text)-2):
                    if text[i]+text[i+1]=="//":
                        c += 1
                for j in range(c):
                    if '//' in text and '\n' in text:
                        cb = text.index('//')
                        ce = text.index('\n')+1
                    else:
                        break
                    comment = ""
                    for i in range(cb,ce):
                        comment += text[i]
                    text = text.replace(comment,'')


            return text

        f = open(sys.argv[1],'r')
        text = f.read()
        f.close()

        #get and save first comment
        firstComment = ""        
        if '*/' in text:
            if '/*' in text and '*/' in text:
                cb = text.index('/*')
                ce = text.index('*/')+2
                for i in range(cb,ce):
                    firstComment += text[i]


        #replace the text
        text = replaceText(text)

        if isCSS():
            newFile = sys.argv[1][:-4]+".min.css"
            f = open(newFile,'w')
        
        elif isJS():
            newFile = sys.argv[1][:-3]+".min.js"
            f = open(newFile,'w')

        f.seek(0)
        f.write(firstComment+"\n"+text)
        
        f.truncate()
        f.close()
        origSize = math.ceil(float(os.stat(sys.argv[1]).st_size)/float(1024)*100)/100
        newSize = math.ceil(float(os.stat(newFile).st_size)/float(1024)*100)/100

        print "Minification Done! \nSaved "+str(origSize-newSize)+"KiB, Original: "+str(origSize)+" KiB, Minified: "+str(newSize)+" KiB. \nNew file saved as "+newFile

print "\n"
