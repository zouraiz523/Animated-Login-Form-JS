        // Add animation to title
        const title = document.getElementById('loginTitle');
        const text = title.innerText;
        title.innerHTML = '';

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            title.appendChild(span);
        }

        // Password visibility toggle
        const togglePassword = document.getElementById('togglePassword');
        const passwordField = document.getElementById('password');

        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Change the eye icon
            this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
            
            // Add a nice animation
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });

        // Form submission with animations
        const loginForm = document.getElementById('loginForm');
        const loginBtn = document.getElementById('loginBtn');
        const errorMsg = document.getElementById('errorMsg');
        const successMsg = document.getElementById('successMsg');
        const loading = document.querySelector('.loading');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Hide any existing messages
            errorMsg.style.display = 'none';
            successMsg.style.display = 'none';
            
            // Show loading animation
            loading.style.display = 'block';
            loginBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                loading.style.display = 'none';
                loginBtn.disabled = false;
                
                // For demo purposes - show success or error
                if (username.length > 3 && password.length > 3) {
                    successMsg.textContent = 'Login successful! Redirecting...';
                    successMsg.style.display = 'block';
                    
                    // Simulate redirect
                    setTimeout(() => {
                        // Here you would normally redirect to dashboard
                        document.querySelector('.container').style.transform = 'translateY(-50px) scale(0.9)';
                        document.querySelector('.container').style.opacity = '0';
                    }, 1500);
                } else {
                    errorMsg.textContent = 'Invalid username or password. Try again.';
                    errorMsg.style.display = 'block';
                    
                    // Shake animation for error
                    document.querySelector('.container').classList.add('shake');
                    setTimeout(() => {
                        document.querySelector('.container').classList.remove('shake');
                    }, 500);
                }
            }, 2000);
        });

        // Add shake animation
        document.querySelector('style').textContent += `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
            
            .shake {
                animation: shake 0.5s;
            }
        `;

        // Interactive background effect
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            document.body.style.background = `linear-gradient(${45 + x * 30}deg, #ff9966, #ff5e62)`;
            
            const container = document.querySelector('.container');
            const rotateX = (y - 0.5) * 10;
            const rotateY = (0.5 - x) * 10;
            
            container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reset transform when mouse leaves
        document.addEventListener('mouseleave', function() {
            const container = document.querySelector('.container');
            container.style.transform = 'rotateX(0) rotateY(0)';
        });