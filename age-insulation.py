import matplotlib.pyplot as plt
import numpy as np

import json

data = json.load(open('./data/insulation.json'))

age = np.array([int(data[i]['indicator_property_age_deciles']) for i in range(len(data))])
wall = np.array([int(data[i]['indicator_wall_insulation_deciles']) for i in range(len(data))])
floor = np.array([int(data[i]['indicator_floor_insulation_deciles']) for i in range(len(data))])
roof = np.array([int(data[i]['indicator_roof_insulation_deciles']) for i in range(len(data))])


plt.plot(age, wall, label='Wall', scaley="linear")
plt.plot(age, floor, label='Floor', scaley="linear")
plt.plot(age, roof, label='Roof', scaley="linear")
plt.xlabel('Age')
plt.ylabel('Insulation')
plt.title('Insulation against Age')

plt.show()