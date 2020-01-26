from audio import get_audio
import matplotlib.pyplot as plt
import numpy as np
import os
import pickle
from sklearn.preprocessing import LabelBinarizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
import scipy.fftpack
from scipy.fftpack import fft
from scipy.io.wavfile import read

def train_model():
    model = GaussianNB()

    root_directory = 'labelled_data/'
    audio = []
    labels = []

    for directory in os.listdir(root_directory):
        for filename in os.listdir(root_directory + directory):
            wav_filename = root_directory + directory + '/' + filename
            samplerate, data = read(wav_filename)

            t_n = 10
            N = 1000
            T = t_n / N
            f_s = 1/T

            frequencies = np.linspace(0.0, 1.0 / (2.0*T), N//2)
            fft_values = fft(data[:, 0])
            fft_values = 2.0/N * np.abs(fft_values[0:N//2])
            audio.append(fft_values)

            if directory == 'crash':
                labels.append('crash')
            else:
                labels.append('not_crash')

    audio = np.array(audio).reshape(-1, 1).reshape(163, 500)
    labels = np.array(labels).reshape(163, 1)

    scores = []
    for i in range(100):
        audio_train, audio_test, label_train, label_test = train_test_split(audio, labels, test_size=0.30, shuffle=True)
        model.fit(audio_train, label_train.ravel())
        scores.append(model.score(audio_test, label_test))

    plt.plot(scores)
    plt.xlabel('runs')
    plt.ylabel('acc')
    plt.show()

    model_file = 'model.sav'
    pickle.dump(model, open(model_file, 'wb'))