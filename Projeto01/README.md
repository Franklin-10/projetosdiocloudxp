# projetodiocloud01

Primeiro projeto do curso XP Inc. - Cloud com Inteligência Artificial, onde é mostrado a criação, configuração e visualização de uma máquina virtual no Azure

** LEMBRETE **

Projeto de inicio de curso, nunca realize essas configurações para fins de produção.

---

## Passo a passo

1.  
   Criação de uma conta no Azure e login no portal Azure  
   https://portal.azure.com/

2.  
   Na tela inicial do portal Azure, na barra de pesquisa digite "máquinas virtuais"  
   [Máquinas Virtuais](/images/ProjetoDio01.png)

3.  
   Na tela de máquinas virtuais, clique em "Criar +" e depois clique em "Criar máquina virtual Azure"  
   [Criar Máquina Virtual Azure](/images/ProjetoDio02.png)

4.  
   Configure a máquina virtual conforme ilustração em (/images/ProjetioDio0301 e /images/ProjetoDio0302) e após clique em "revisar + criar"  
   Importante – Ao escolher "Opções de disponibilidade" escolha "Não existem redundâncias de infraestrutura necessárias"  
   [Configuração 1](/images/ProjetioDio0301.png)  
   [Configuração 2](/images/ProjetoDio0302.png)

5.  
   Aguarde a revisão, na tela de revisão você já pode consultar o valor estimado de gasto por hora da máquina e também rolar a página para conferir uma visão geral das opções escolhidas. Se tudo estiver OK, clique em criar.  
   [Revisão](/images/ProjetoDio04.png)

6.  
   Após clicar, o Azure vai te levar à tela de deploy. Aguarde e depois clique em "Ir para recurso".  
   [Ir para recurso](/images/ProjetoDio05.png)

7.  
   Parabéns, sua máquina virtual está criada. Esta é a tela inicial da VM, onde você pode verificar todos os recursos e configurações, além do IP público. Para testar, clique em "Ligar".  
   [Ligar VM](/images/ProjetoDio06.png)

8.  
   Na tela de Inicialização, selecione o RDP nativo, confirme o IP público e clique em "Transferir RDP".  
   [Transferir RDP](/images/ProjetoDio07.png)

9.  
   Abra o arquivo `.rdp` baixado e clique em "Conectar". Se aparecer aviso de certificado, clique em "Sim". Use o usuário e senha definidos no passo 4.  
   [Conectar RDP](/images/ProjetoDio08.png)

10.  Se tudo correr bem, você verá a área de trabalho do Windows da sua VM.  
   [Desktop Windows](/images/ProjetoDio09.png)
