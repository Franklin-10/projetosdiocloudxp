print('Testando...')

import speech_recognition as sr

import os

def ouvir_microfone():
  microfone = sr.Recognizer()

  with sr.Microphone() as source:
    #Chama um algoritmo de redução de ruídos no som
    microfone.adjust_for_ambient_noise(source)

    #Avisa o usuário que esta pronto para ouvir
    print("Olá, diga algo:")

    #Armazena o audio
    audio = microfone.listen(source)

    try:
      #Passa a variavel para o algoritmo reconhecedor de padrões
      frase = microfone.recognize_google(audio, language='pt-BR')

      if 'navegador' in frase:
        os.system('start chrome.exe')
        return False
      elif "excel" in frase:
        os.system('start excel.exe')
        return False
      elif "steam":
        os.system('start K:\Steam\steam.exe')
        return False
      elif 'fechar':
        os.system('exit')
        return True
      
      
      #retorna a frase pronunciada
      print('Voce disse: ' + frase)
    
    except sr.UnknownValueError:
      print('Não entendi seu audio')

    return False
  
while True:
  if ouvir_microfone():
    break