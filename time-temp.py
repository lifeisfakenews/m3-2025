import matplotlib.pyplot as plt
import numpy as np

inside_temps = np.array([21.12, 18.92, 17.82, 17.22, 17.22, 16.29, 19.34, 25.68, 28.74, 33.35, 35.22, 37.53, 38.69, 38.67, 38.59, 36.25, 36.05, 33.62, 33.36, 32.51, 27.83, 27.82, 27.22, 26.12])
outside_temps = np.array([21.1, 18.9, 17.8, 17.2, 17.2, 16.1, 18.9, 25.0, 27.8, 32.2, 33.9, 36.1, 37.2, 37.2, 37.2, 35.0, 35.0, 32.8, 32.8, 32.2, 27.8, 27.8, 27.2, 26])
times = np.array(["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"])

plt.plot(times, inside_temps, label="Inside Temp")
plt.plot(times, outside_temps, label="Outside Temp")
plt.xlabel('Time')
plt.ylabel('Temperature')
plt.title("Temperature over time (semi detached)")


plt.legend()

plt.show()