# Introduction
Application to upload files to your remoteStorage server.

# Installation

    $ git clone 
    $ cd remote-storage-uploader
    $ composer install
    $ cp config/uploader.yaml.example config/uploader.yaml

Now modify `config/uploader.yaml` to point to your environment.

    $ mkdir -p $HOME/bin
    $ ln -s $PWD/bin/remote-storage-uploader $HOME/bin

# Running

    $ remote-storage-uploader file.ext

The application will print the full URL where the document is stored on 
succesful upload.

# Obtaining Bearer Token
You need to obtain an access token with `upload:rw` scope and put it in 
`config/uploader.yaml`.
