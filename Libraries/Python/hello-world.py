import time
import curses

def main(stdscr):
    curses.curs_set(0)
    stdscr.addstr(15, 5, "Hello World")
    stdscr.refresh()
    time.sleep(3)


curses.wrapper(main)
