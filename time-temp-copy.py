import matplotlib.pyplot as plt
import numpy as np

# y=1066877120(T-22)

Tc = []
y = []

for T in range(22, 39):
    Tc.append(T)
    y.append(1066877120 * (T - 22))

inside_temps = np.array(Tc)
times = np.array(y)

plt.plot(inside_temps, times)
plt.xlabel('Temperature (C)')
plt.ylabel('Energy demanded (J)')
plt.title("Energy demanded in Birmingham")

plt.show()