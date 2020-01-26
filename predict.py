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


def predict_sound(audio):
    samplerate, data = read(audio)
    t_n = 10
    N = 1000
    T = t_n / N
    f_s = 1/T

    frequencies = np.linspace(0.0, 1.0 / (2.0*T), N//2)
    fft_values = fft(data[:, 0])
    fft_values = 2.0/N * np.abs(fft_values[0:N//2])

    model = pickle.load(open("model.sav", "rb"))
    return model.predict(fft_values)