# Introduction
Application to upload files to your remoteStorage server.

# Installation

    $ git clone 
    $ cd remote-storage-uploader
    $ composer install
    $ cp config/uploader.yaml.example config/uploader.yaml
    $ mkdir -p $HOME/bin
    $ ln -s $PWD/bin/remote-storage-uploader $HOME/bin

Now modify `config/uploader.yaml` and set your `userAddress`.

# Obtaining Access Tokens
After setting your `userAddress`:

    $ remote-storage-uploader --authorize

This will query your WebFinger record and display a URL you should click to 
authorize the application. It will require you to copy/paste the displayed
code to `config/uploader.yaml` as `bearerToken`.

# Running

    $ remote-storage-uploader file.ext

The application will print the full URL where the document is stored on 
succesful upload.

You can use `--force` to overwrite existing files, `--folder MyFolder` to
specify a subfolder of `upload` to write the file to and `--mime-type foo/bar` 
to override autodetecion of the file's mime type.
