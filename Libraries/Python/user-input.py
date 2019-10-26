import time
import curses

def main(stdscr):
    curses.curs_set(0)

    while 1:
        key = stdscr.getch()

        stdscr.clear()

        if key == curses.KEY_UP:
            stdscr.addstr(0, 0, "You pressed Up key!")
        elif key == curses.KEY_DOWN:
            stdscr.addstr(0, 0, "You pressed Down key!")
        elif key == curses.KEY_ENTER or key in [10, 13]:
            stdscr.addstr(0, 0, "You pressed Enter!")
        
        stdscr.refresh()

curses.wrapper(main)
