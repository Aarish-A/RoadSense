
import matplotlib.pyplot as plt
import numpy as np
import os
import scipy.fftpack
from scipy.fftpack import fft
from scipy.io.wavfile import read


def get_audio():
    root_directory = 'labelled_data/'
    audio = np.ndarray(500)
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
            print(audio)
            print(fft_values)
            np.append(audio, fft_values, axis=0)
            break

            if directory == 'crash':
                labels.append('crash')
            else:
                labels.append('not_crash')

    return data, np.array(labels)
        
# def get_data:
    # data = []
    # labels = []
    #     for 
    # wav_fname = 'crash2/1.wav'
    # samplerate, data = read(wav_fname)
    # length = data.shape[0] / samplerate
    # time = np.linspace(0., length, data.shape[0])
    # # plt.plot(time, data)
    # plt.plot(time, data[:, 0], label='Left Channel')    
    # # plt.plot(time, data[:, 1], label='Right Channel')
    # plt.legend()
    # plt.xlabel('Time')
    # plt.ylabel('Amplitude')
    # plt.title('audio')
    # plt.show()

    # t_n = 10
    # N = 1000
    # T = t_n / N
    # f_s = 1/T

    # frequencies = np.linspace(0.0, 1.0/(2.0*T), N//2)
    # fft_values = fft(data[:, 0])
    # fft_values = 2.0/N * np.abs(fft_values_[0:N//2])

    # plt.plot(frequencies, fft_values)
    # plt.xlabel('Frequency [Hz]')
    # plt.ylabel('Amplitude')
    # plt.title("audio after fourier transform")
    # plt.show()
