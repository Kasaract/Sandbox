import time
import curses

def main(stdscr):
    curses.curs_set(0)
    curses.init_pair(1, curses.COLOR_RED, curses.COLOR_YELLOW)

    h, w = stdscr.getmaxyx()
    text = "Hello, Menu!"

    x = w//2 - len(text)//2
    y = h//2

    stdscr.attron(curses.color_pair(1))
    stdscr.addstr(y, x, text)
    stdscr.attroff(curses.color_pair(1))

    stdscr.refresh()
    time.sleep(3)

curses.wrapper(main)
