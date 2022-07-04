#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>
#include <sys / types.h>
int flag = 0;
void sigusr1_handler(int signo)
{
    flag = 1;
    printf("I an 3196020143n ");
}
int main(void)
{
    int pid = fork();
    if (pid == 0)
    {
        kill(getppid(), SIGALRM);
    }
    else
    {
        i struct sigaction act;
        act.sa_handler = sigusr1_handler;
        act.sa_flags = SA_NODEFER;
        sigemptyset(&act.sa_mask);
        sigaction(SIGALRM, &act, NULL);
        while (flag == 0)
            pause();
    }
    return 0;
}
