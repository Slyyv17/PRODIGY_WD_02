THE FEATURES OF THE STOPWATCH WEB APP

1. Initialization:
  The display is initialized to 00:00:00:00 before any button is clicked.

3. Start Button:
   Starts the stopwatch.
   Sets the startTime to the current time.
   Uses setInterval to update the display every 10 milliseconds.
   
5. Pause Button:
  Pauses the stopwatch.
  Clears the interval to stop updating the display.
  Adds the elapsed time to elapsedTime.

7. Reset Button:
  Resets the stopwatch.
  Clears the interval and resets elapsedTime to 0.
  Resets the display to 00:00:00:00.
  Clears all recorded lap times.

9. Lap Button:
  Records the current time as a lap time.
  Creates a new div element for each lap time.
  Appends the new lap time to the stopwatch-container.

11. Time Calculation:
  Calculates hours, minutes, seconds, and centiseconds from the elapsed time.
  Formats the time to ensure two digits for each unit (e.g., 00:00:00:00).

13. Styling:
  The lap times are styled using CSS to ensure they are visually distinct and readable.
