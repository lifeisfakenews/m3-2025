import matplotlib.pyplot as plt
import numpy as np

temps = np.array([21.1, 18.9, 17.8, 17.2, 17.2, 16.1, 18.9, 25.0, 27.8, 32.2, 33.9, 36.1, 37.2, 37.2, 37.2, 35.0, 35.0, 32.8, 32.8, 32.2, 27.8, 27.8, 27.2, 26.1])
times = np.array(["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"])

plt.plot(times, temps)
plt.xlabel('Time')
plt.ylabel('Temperature')
plt.title('Temperature over Time')

plt.show()