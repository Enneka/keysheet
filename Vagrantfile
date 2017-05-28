# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.box_check_update = true

	# name
	config.vm.define :keysheet

	# network
	config.vm.network "private_network", ip: "192.168.10.10"

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y nginx
    cp /vagrant/vagrant/nginx.conf /etc/nginx/sites-available/keysheet
    ln -s /etc/nginx/sites-available/keysheet /etc/nginx/sites-enabled/keysheet
    service nginx reload
  SHELL
end
